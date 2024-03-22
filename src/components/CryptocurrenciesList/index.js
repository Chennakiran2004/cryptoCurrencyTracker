import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyView = () => {
    const {cryptocurrenciesDataList} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesDataList.map(eachCryptocurrency => (
            <CryptocurrencyItem
              cryptoCurrencyDataDetails={eachCryptocurrency}
              key={eachCryptocurrency.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrencyView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
