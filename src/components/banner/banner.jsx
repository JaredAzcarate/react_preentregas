import DataBanners from '../../../data/data_banners'

export default function Banner() {

  return (
    <>
    <section className='my-10'>
        
        {DataBanners.map(banner => (
            <img key={banner.title} src={banner.img} alt={banner.title} className='rounded-lg'/>
        ))}
        
    </section>
    </>
  )
}
