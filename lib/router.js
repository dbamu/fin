FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('home', {content:'index'});
    }
});

FlowRouter.route('/contract', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:", params.walletAdderss);
        BlazeLayout.render('home', {content:'contract'});
    }
});


FlowRouter.route('/generic', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:", params.walletAdderss);
        BlazeLayout.render('home', {content:'generic'});
    }
});


FlowRouter.route('/elements', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:", params.walletAdderss);
        BlazeLayout.render('home', {content:'elements'});
    }
});

FlowRouter.route('/accSearch', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:2222", params.walletAdderss);
        BlazeLayout.render('home', {content:'accSearch'});
    }
});

FlowRouter.route('/petRegi', {
    action: function (params, queryParams) {
        console.log("Yeah! We are on the post:2222", params.walletAdderss);
        BlazeLayout.render('home', {content:'petRegi'});
    }

});
