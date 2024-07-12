"use client";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body{
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.color};
    }
`;
export const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
export const StyledNavbarBrand = styled.h3`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;
export const StyledNavbarLink = styled.ul`
  * {
    color: ${(props) => props.theme.color};
  }
`;
export const StyledProductCard = styled.div`
  color: ${(props) => props.theme.color};
  h5{
    font-size: 1.25rem;
    font-weight: 700;
    @media (max-width: 600px) {
      font-size: 1rem;
  }
`;
export const StyledCardImage = styled.div`
  height: 298px;
  @media (max-width: 600px) {
    height: 200px;
  }
`;
export const StyledViewAllButton = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
export const StyledBrands = styled.div`
  gap: 106px;
  @media (max-width: 600px) {
    gap: 70px;
  }
`;
export const StyledLandingStats = styled.div`
  border-right: 1px solid #0000001a;
  padding: 0 25px 0 0;
  @media (max-width: 768px) {
    border: none;
    padding: 0;
  }
  &:last-child {
    border: none;
  }
`;
export const StyledBrand = styled.div`
  flex: 1;
  height: 35px;
  min-width: 40px;
`;
export const StyledBrowseByDressStyle = styled.main`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
`;
export const StyledDressCard = styled.div`
  height: 289px;

  @media (max-width: 600px) {
    height: 190px;
  }
`;
export const StyledIcon = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
`;
export const StyledNewsletterInput = styled.input`
  &:focus {
    border: 0;
    outline: 0;
  }
  &::placeholder {
    opacity: 50%;
    font-weight: lighter;
  }
`;
export const StyledSearchButton = styled.button`
  background-color: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.color};
`;
export const StyledFooter = styled.footer`
  padding: 140px 0;
  background-color: ${(props) => props.theme.footer};
  * {
    color: ${(props) => props.theme.greyColor};
  }
`;
export const StyledTabLink = styled.button`
  border: none;
  font-size: 1.25rem;
  opacity: 0.5;
  font-weight: 500;
  border-bottom: 1px solid gray;
  &.active {
    opacity: 1;
    font-weight: 700;
    border-bottom: 1px solid black;
  }
`;
export const StyledFooterHeading = styled.li`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
  color: ${(props) => props.theme.color};
`;
export const StyledNewsletter = styled.section`
  transform: translateY(100px);
`;
export const StyledOfferBanner = styled.div`
  height: 38px;
`;
export const StyledBannerButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  border: none;
  background: none;
  color: white;
`;
export const StyledDiscountBadge = styled.p`
  font-size: 12px;
  padding: 0.25rem 1rem;
  @media (max-width: 600px) {
    padding: 0rem 0.25rem;
    font-size: 10px;
  }
`;
export const StyledColorRound = styled.button`
  background-color: ${(props) => props.color};
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLandingMobile = styled.div`
  height: 448px;
`;
export const StyledImageMenuItem = styled.div`
  width: 152px;
  height: 167px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: 156px;
  }
`;
export const StyledImageMenuActive = styled.div`
  width: 100%;
  height: 530px;
  position: relative;
`;
export const StyledFilterMenu = styled.div`
  background-color: ${(props) => props.theme.background};
  select {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
  * {
    color: ${(props) => props.theme.color};
  }
`;
export const StyledFilterDiv = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const StyledMiniCartText = styled.p`
  font-size: 14px;
  @media (max-width: 798px) {
    font-size: 12px;
  }
`;

export const SliderContainer = styled.div`
  width: 300px;
  position: relative;
  height: 5px;
  margin: 45px 0 10px 0;
  @media (max-width: 992px) {
    margin: 0px 0 10px 0;
  }
`;

export const SliderTrack = styled.div`
  position: absolute;
  left: 13px;
  right: 15px;
  height: 5px;
`;

export const InverseLeft = styled.div`
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 0 7px;
`;

export const InverseRight = styled.div`
  position: absolute;
  right: 0;
  height: 5px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 0 7px;
`;

export const Range = styled.div`
  position: absolute;
  left: 0;
  height: 5px;
  border-radius: 14px;
  background-color: black;
`;

export const Thumb = styled.span`
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 20px;
  width: 20px;
  text-align: left;
  margin-left: -11px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  color: #fff;
  border-radius: 50%;
  outline: none;
`;

export const Sign = styled.div`
  opacity: 0;
  position: absolute;
  margin-left: -11px;
  top: -39px;
  z-index: 3;
  background-color: black;
  * {
    color: #fff;
  }
  width: 28px;
  height: 28px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:after {
    position: absolute;
    content: "";
    left: 0;
    border-radius: 16px;
    top: 19px;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top-width: 16px;
    border-top-style: solid;
    border-top-color: black;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 28px;
  }

  ${SliderContainer}:hover & {
    opacity: 1;
  }
`;

export const Input = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 3;
  height: 14px;
  top: -2px;
  width: 100%;
  opacity: 0;

  &:focus::-webkit-slider-runnable-track {
    background: transparent;
    border: transparent;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 28px;
    height: 28px;
    border-radius: 0px;
    border: none;
    background: black;
    -webkit-appearance: none;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background: transparent;
    border: none;
  }

  &::-ms-tooltip {
    display: none;
  }
`;
export const StyledSizeOption = styled.div`
  width: max-content;
  font-size: 16px;
  @media (max-width: 992px) {
    font-size: 12px;
  }
`;
export const StyledColorOptions = styled.div`
  border: 1px solid gray;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  @media (max-width: 992px) {
    width: 25px;
    height: 25px;
    font-size: 15px;
  }
`;
export const StyledOrderSelectDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
`;
export const StyledOrderSelect = styled.select`
  border: 0;
  font-weight: 600;
  font-size: 16px;
`;
export const StyledProductList = styled.div`
  transform: translateY(30px);
  background-color: ${(props) => props.theme.background};
`;

export const StyledPagination = styled.div`
  position: absolute;
  bottom: -80px;
  right: 0;
  width: 66%;
  justify-content: space-between;
  padding: 1 0rem;
  background-color: ${(props) => props.theme.background};
  * {
    color: ${(props) => props.theme.color};
  }
  @media (max-width: 992) {
    width: 100%;
  }
`;

export const StyledPaginationButton = styled.button`
  background-color: ${(props) => props.theme.background};
  outline: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 14px;
`;

export const StyledPaginationNumber = styled.button`
  background-color: ${(props) => props.theme.background};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  &.active {
    background-color: ${(props) => props.theme.color};
    color: ${(props) => props.theme.background};
  }
`;

export const StyledCartLength = styled.small`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
  z-index: 2;
`;

export const StyledCounter = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.color};
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const ProductDetailPrice = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const StyledCommentOrderSelect = styled.select`
  background-color: #f0f0f0;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.color};
  border-radius: 2rem;
  border: none;
  font-size: 1rem;
  font-weight: 500;
`;
