import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ApiService from "./services/api";
import logo from "./images/logo.svg";
import "./styles/main.css";
import Table from "./components/table";

const App = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        ApiService.getOffers().then(data => {
            setOffers(data.data.offers);
        })
    }, [ApiService.getOffers]);

    function onChangeStatus(id) {
        return () => {
            ApiService.updateOffer(id).then(() => {
                ApiService.getOffers().then(data => {
                    setOffers(data.data.offers);
                })
            });
        }
    }

    const rows = offers
        .map(offer => ({
            customer_id: offer.id,
            status: offer.status,
            customer_name: offer.customer_name,
            customer_company: offer.customer_company,
            contract_price: offer.contract_price,
            schedule_matches: offer.schedule_matches,
            button: offer.status === 'new' && (
                <div className={'button'} onClick={onChangeStatus(offer.customer_id)}>
                    Accept
                </div>
            )
        }));

    return (
        <div className={'application'}>
            <div className={'logo'}><img src={logo} alt=""/></div>
            <h1>Offers</h1>
            <h2>New offers</h2>
            <Table rows={rows.filter(offer => offer.status === 'new')}/>
            <h2>Accepted offers</h2>
            <Table rows={rows.filter(offer => offer.status === 'accepted')}/>
        </div>);
};

ReactDOM.render(<App />, document.getElementById("app"));
