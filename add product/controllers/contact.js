exports.getContact =  (req,res, next) => {
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contact',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}