import ghpages from 'gh-pages';

ghpages.publish('dist', (err) => {
    if (err) {
        console.error('Deploy failed with error:', err);
    } else {
        console.log('Deployed successfully!');
    }
});