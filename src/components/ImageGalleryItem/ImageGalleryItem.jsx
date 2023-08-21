import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem ({imgItem}) {
  console.log(imgItem.hits);
  return(
    <>
      {imgItem.hits.map(({id, webformatURL}) => (
        <li className={css.gallery_item} key={id}>
          <img className={css.gallery_image} src={webformatURL} alt="" />
        </li>
    ))}
    </>
  )
}