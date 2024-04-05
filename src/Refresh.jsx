import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import data from "./data.json";


const Refresh = ({ refreshOption, setIsLoading }) => {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#282c34");

const effect =useEffect(() => {
            setLoading(true);
            setIsLoading(true)
            setTimeout(() => {
                setLoading(false);
                setIsLoading(false);
            }, 5000);
    }, [refreshOption]);


    return (
        <div>
            { refreshOption === "refreshTable" ? (

                <div className="refreshTable">
                    <GridLoader
                        color={color}
                        loading={loading}
                        size={145}
                        speedMultiplier={0.25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="refreshTable"
                    />
                    <p>Table is Re-Loading, Please Wait...</p>
                </div>
            ) : (
                <div className="refreshPage">
                    {/* <GridLoader
                        color={color}
                        loading={loading}
                        size={190}
                        speedMultiplier={0.25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="refreshTable"
                    /> */}
                    <div className="page-loader">

                    </div>
                    <p>Page is ReLoading . . .</p>
                </div>
            )}
        </div>
    );
};

export default Refresh;
