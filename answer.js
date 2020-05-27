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
}) */

// Do a query to just return the names of all the bounties
/*  */