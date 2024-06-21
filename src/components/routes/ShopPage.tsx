import PageHeader from "components/shared/PageHeader";
import styled from "styled-components";
import {
  MAIN_BG_COLOR,
  MIN_CONTENT_WIDTH,
  MIN_CONTENT_WIDTH_2,
  PRODUCT_CARD_WIDTH,
  SECONDARY_TEXT_COLOR,
} from "variables";
import FilterIcon from "assets/icons/filtering.svg?react";
import ProductGridIcon from "assets/icons/products-grid.svg?react";
import ProductListIcon from "assets/icons/products-list.svg?react";
import ProductCard from "components/product/ProductCard/ProductCard";
import ProductMock from "mock/product.mock";
import Pagination from "components/shared/Pagination/Pagination";
import { useState } from "react";
import TrophyIcon from "assets/icons/trophy.svg?react";
import GuaranteeIcon from "assets/icons/guarantee.svg?react";
import ShippingIcon from "assets/icons/shipping.svg?react";
import CustomerSupportIcon from "assets/icons/customer-support.svg?react";

const FilterBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${MAIN_BG_COLOR.default};
`;

const FilterInner = styled.div`
  min-width: ${MIN_CONTENT_WIDTH};
  height: 100px;
  display: flex;
  align-items: center;

  .filter {
    display: flex;
    align-items: center;
    gap: 12px;

    :first-child {
      cursor: pointer;
    }
  }

  .view {
    margin-left: 24px;
    display: flex;
    align-items: center;
    gap: 24px;

    > * {
      cursor: pointer;
    }
  }

  .separator {
    width: 2px;
    height: 36px;
    background-color: ${SECONDARY_TEXT_COLOR.default};
    margin: 0 30px;
  }

  .count {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 16px;

    input {
      width: 55px;
      height: 55px;
      box-sizing: border-box;
      outline: none;
      border: none;
      text-align: center;
      color: ${SECONDARY_TEXT_COLOR.default};
    }
  }

  .sort-by {
    margin-left: 30px;
    display: flex;
    align-items: center;
    gap: 16px;

    select {
      min-width: 188px;
      height: 55px;
      border: none;
      padding: 12px 30px;
      color: ${SECONDARY_TEXT_COLOR.default};
    }
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductsInner = styled.div`
  width: ${MIN_CONTENT_WIDTH};
  padding: 60px 0 85px;

  .list {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(${PRODUCT_CARD_WIDTH} + 20px), 1fr)
    );
    grid-row-gap: 32px;
  }

  .pagination {
    width: min-content;
    margin: 0 auto;
    margin-top: 70px;
  }
`;

const Advantages = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${MAIN_BG_COLOR.default};
`;

const AdvantagesInner = styled.div`
  width: ${MIN_CONTENT_WIDTH_2};
  padding: 100px 0;
  display: flex;
  align-items: center;

  .list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      display: flex;
      gap: 10px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        &__title {
          font-size: ${(props) => props.theme.textExtraLargeFontSize};
          line-height: ${(props) => props.theme.textExtraLargeLineHeight};
          font-weight: 600;
        }

        &__description {
          font-size: ${(props) => props.theme.textLargeFontSize};
          line-height: ${(props) => props.theme.textLargeLineHeight};
          font-weight: 500;
          color: #898989;
        }
      }
    }
  }
`;

const productsList = new ProductMock().bigList();

interface IAdvantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const advantagesList: IAdvantage[] = [
  {
    icon: <TrophyIcon />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: <GuaranteeIcon />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <ShippingIcon />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <CustomerSupportIcon />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

export const ShopPage = () => {
  const [page, setPage] = useState(5);

  const handleSwitchPage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <PageHeader />
      <FilterBlock>
        <FilterInner>
          <div className="filter">
            <FilterIcon />
            <span>Filter</span>
          </div>
          <div className="view">
            <ProductGridIcon />
            <ProductListIcon />
          </div>
          <div className="separator" />
          <div className="show-results">Showing 1–16 of 32 results</div>
          <div className="count">
            Show <input type="text" value={16} />
          </div>
          <div className="sort-by">
            <div>Sort by</div>
            <select>
              <option value="">Default</option>
              <option value=""></option>
            </select>
          </div>
        </FilterInner>
      </FilterBlock>
      <Products>
        <ProductsInner>
          <div className="list">
            {productsList.map((product) => (
              <ProductCard key={product.id} card={product} />
            ))}
          </div>
          <Pagination
            pageCount={10}
            pageNumber={page}
            switchPage={handleSwitchPage}
            className="pagination"
          />
        </ProductsInner>
      </Products>
      <Advantages>
        <AdvantagesInner>
          <div className="list">
            {advantagesList.map((i) => (
              <div key={i.title} className="item">
                <div className="icon">{i.icon}</div>
                <div className="info">
                  <div className="info__title">{i.title}</div>
                  <div className="info__description">{i.description}</div>
                </div>
              </div>
            ))}
          </div>
        </AdvantagesInner>
      </Advantages>
    </>
  );
};
