import cloudinary from 'cloudinary-core'

const cl = new cloudinary.Cloudinary({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true
})

export default {
  getUrl: (id, options) => {
    return cl.url(id, options)
  }
}
