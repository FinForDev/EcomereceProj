import "./HomeScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";


const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products } = getProducts;
    console.log(products)
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);




    //paginate
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(products.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const displayProducts = products
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((product) => {
            return (
                <div className="user"  key={product._id}>
                    <Product
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        productId={product._id}
                    />
                </div>
            );
        });




    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Products </h2>


            <div className="homescreen__products"  >
                {displayProducts}

            </div>


            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}

            />






        </div>
    );
};

export default HomeScreen;