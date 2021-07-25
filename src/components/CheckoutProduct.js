import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { useDispatch} from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {

    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        //Push the product as an action to REDUX store....the basket store
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        //Remove the item from REDUX
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-4 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="NGN" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            loading='lazy'
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Neext-day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right Add and Remove Button */}
            <div className="flex flex-col space-y-2 justify-self-end">
                <button className="button" onClick={addItemToBasket}> Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}> Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
