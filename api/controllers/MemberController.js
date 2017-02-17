/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
                    // sails.log('Found "%s"', child.name);
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

        // Member.findOrCreate({
        //     name: childMember.name
        // }, { name: childMember.name })
        // .then(function(childMember) {
            
        // })
    }
};

