// Read/Query
// Do a query to see all the bounties
/* db.bounties.find().pretty() */

// Do a query to find the bounty whose client is Time Bureau
/* db.bounties.find({ client : 'Time Bureau' }).pretty() */

// Do a query to find the bounties who have been captured
/* db.bounties.find({ captured : true }).pretty() */

// Do a query specific to the bounty you inserted
/* db.bounties.insert ({
        name : 'My Son',
        wantedFor : 'Flooding the bedroom',
        client : 'Lina',
        ship : 'NaiNai',
        reward : 1000,
        hunters : [
                'Husband',
                'Maid'
        ],
        captured : false
}) 

   db.bounties.find({ client : 'Lina' }).pretty() */

// Do a query to just return the names of all the bounties
/* db.bounties.find({},{
    name : 1,
    _id: -1
}).pretty() */

// Remove
// Starbuck and the Captain have come to an understanding. Remove her record
/* db.bounties.remove({
    name : 'Starbuck'
}) */
// find and remove the duplicate record - be sure to JUST remove the one copy
/* db.bounties.deleteOne({
    name : 'Han Solo'
}) */

// Update
// Update Sara Lance's name to be her superhero alias 'White Canary'
/* db.bounties.update({
    name: 'Sara Lance'
},
{
    $set: { name: 'White Canary'}
}) */

// Update Rocket's ship to be The Milano 2
/* db.bounties.update({
    ship: 'The Milano'
},
{
    $set: { ship: 'The Milano 2'}
}) */

