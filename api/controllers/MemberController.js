/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findChild: function(req, res) {
        var Promise = require('q');

        function loadChild(parent) {
            console.log(parent.id);
            return Member.find({
                parent: parent.id
            }).then(function(items) {
                if (items.length > 0) {
                    parent.child = items;
                }
                return parent;
            });
        }
        Member.find()
            .then(function(members) {
                var listPromise = [];
                members.forEach(function(item) {
                    listPromise.push(loadChild(item));
                });
                Promise.all(listPromise)
                    .done(function(values) {
                        return res.json(values);
                    });
            });
    },
	addChild: function(req, res) {
        var memberId = req.param('id');
        var childMember = req.body.child;

        Member.findOne({
            id: memberId
        }).populate('child')
        .then(function(member) {
            if (!member) {
                return res.notFound('Could not find member, sorry.');
            }

            Member.create({
                name: childMember.name
            })
            .then(function(item) {
                member.child.add(item);
                
                member.save()
                    .then(function(child) {
                        return res.json(member);
                    })
                    .catch(function(errChild) {
                        console.log("2");
                        return res.serverError(errChild);
                    });
            })
            
        })
        .catch(function(err) {
            console.log("1");
            return res.serverError(err);
        })
    }
};

