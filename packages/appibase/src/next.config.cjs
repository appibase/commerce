const commerce = require('./commerce.config.json')

module.exports = {
  commerce,
  images: {
    domains: [
      'localhost', 'shopify.vercel.store', 'vercel.store',
      'demo.vercel.store', 'res.cloudinary.com', 'store.storeimages.cdn-apple.com'
    ],
  },
}
