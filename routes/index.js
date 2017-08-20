const Twit = require('twit');

const twitter = new Twit({
    consumer_key: '20pVe5QQamcsYeSfSuBEjDiNP',
    consumer_secret: 'oxBH9yEuz2v8GKsnEg1D1VMtnqTEfNioXI6rXHK6w5CGf5g4qb',
    access_token: '898537504999165952-X1Z1s0Bbps6HCdVCE2iZV4vtHL8C4au',
    access_token_secret: 'rIm8JcwgHvDJivWiluuMzUTU3QdBzt6owrLeeMNZwIHRv'
})

module.exports = (app) => {

    app.post('/api/search', (req, res) => {
        if (req.body.query) {
            twitter.get('search/tweets', { q: req.body.query, count: 50 }, (err, data, response) => {
                return res.status(200).send({
                    code: 200,
                    data: data.statuses
                })
            });
        }
    });

}