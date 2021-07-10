import React, { useEffect, useState } from 'react';
import "../App.css";
import SearchIcon from '@material-ui/icons/Search';
import Slide from './ImageSlide';
//import axios from 'axios';
import Loading from "./Loading";

const SearchBar = () => {
    const [list, setlist] = useState([]);
    const [count,setcount]=useState(0);
    const[loading,setloading]=useState(false);

    const [Search_for, set_Search_for] = useState("");


    const fetching_search_target = (e) => {
        set_Search_for(e.target.value);
    }

    const [FinalSearchKeyword, setFinalsearch] = useState("");
    const start_searching = () => {

        setFinalsearch(document.getElementById("search_content").value);
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=${8+count}&client_id=rIWiJSK9U7ix958ch9sQz5AHrk_6Ly4g7szMeK8Xbac&page=1&query=${FinalSearchKeyword}`);

            const data = await response.json();
            console.log(data);
            setlist(data.results);

            setTimeout(()=>{
                setloading(false);
            },3000);

        }
        getData();
    }, [FinalSearchKeyword,count]);

    const LoadMore=()=>{
        setloading(true);
        setcount(count+8);

    }

    return (
        <>
            <div className="row search_bar m-2 justify-content-around ">
                <div className="row col-md-10 search_area p-0 m-0">
                    <input id="search_content" type="text" placeholder="Search for photos" style={{ fontFamily: 'Roboto Condensed' }} value={Search_for} onChange={fetching_search_target} autoComplete="Off" />
                </div>
                <div className="row col-md-2 search_button m-0">
                    <button onClick={start_searching}><SearchIcon /></button>
                </div>
            </div>
            <div className="row Result_text m-2 ">
                <p style={{ fontFamily: 'Roboto Condensed' }}>Random</p>
                <span style={{ fontFamily: 'Roboto Condensed' }}>Showing {list.length} Images that has been found</span>
            </div>
            <div className="row Image_Display_Area m-2 p-0 justify-content-front">
               {
                   list.map((current)=>{
                        return <Slide url={current.urls.regular} key={current.id} />
                   })
               }

            </div>
            <div className="row Load_More_Area m-2 justify-content-around ">
                {
                    loading?<Loading/>:<button className="col-2 m-2 p-2 loadMore" onClick={LoadMore}>Load More</button>
                }
            </div>

        </>
    )
}

export default SearchBar;


