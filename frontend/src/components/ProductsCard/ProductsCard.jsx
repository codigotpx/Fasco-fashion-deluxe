import './ProductCard.css'
import { Link } from 'react-router'

const ProductsCard = ({ product }) => {
    return (
        
        <Link 
        key={product.id}
        to={`/shop/product/${product.id}`}
        >
            <article className='product-card'>
                <div className='container-image'>
                    <img src={product.images[0]} 
                    alt={product.title} 
                    className="product-image"
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className='product-reviews'>4.1k custom review</p>
                    <p className="product-price">${product.price} </p>
                </div>
            </article>
        </Link>
        
    )
}

export default ProductsCard