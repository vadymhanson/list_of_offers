import React from 'react';
import PropTypes from 'prop-types';

const Table = ({rows}) => (
    <div className={'table'}>
        {rows.map(row => (
            <div className={'row'}>
                <div className={row.button ? 'cell customer customer-border': 'cell customer'}>
                    {row.status === 'new' ? <div className={row.schedule_matches ? 'schedule red' : 'schedule' +
                        ' green'}/> : null}
                    <div className={'info'}>
                        <div className={'company'}>{row.customer_company}</div>
                        <div className={'name'}>{row.customer_name}</div>
                    </div>
                </div>
                <div className={row.button ? 'cell price price-placement' : 'cell price'}>{row.contract_price} €</div>
                {row.button ? <div className={'cell accept'}>{row.button}</div> : null}
                </div>
        ))}
    </div>);

Table.propTypes = {
    rows: PropTypes.array.isRequired
};

export default Table;
