import React, {useState} from 'react';
import styled from 'styled-components';
import Avatar from '../assets/img/logo192.png';

export interface CardProps {
  /**
   * Primary color for action call
   */
  primary?: boolean;
  /**
   * Header title
   */
  title: string;
  /**
   * Optional click handler for primary button
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={22} height={21} viewBox="0 0 22 21" fill="none" {...props}>
    <rect width={22} height={21} rx={7} fill="white" />
    <path d="M10 3H11.8462V9.27451H16V11H10V3Z" fill="#2382F4" />
  </svg>
);

/**
 *  A card is a flexible-sized container that groups related blocks of content and
 *  information into one understandable unit.
 */
export function Card({primary = true, title = 'Appointment Request', onClick}: Partial<CardProps>) {
  // const [status, setStatus] = useState(false);
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Segment justify={'flex-start'} align={`center`} padding={`8px 0 0 0`}>
          <Clock />
          <Caption>12 Jan 2020, 8am – 10am</Caption>
        </Segment>
      </Header>
      <Segment justify={'flex-start'}>
        <Profile src={Avatar} />
        <Segment column>
          <Name>Louis</Name>
          <Name>Peterson</Name>
        </Segment>
        <Segment justify={`flex-end`} padding={`0 0 0 0`}>
          <Help>i</Help>
        </Segment>
      </Segment>
      <Segment justify={'space-between'}>
        <Button {...{primary, onClick}}>ACCEPT</Button>
        <Button color={`#6E7891`} width={`92px`}>
          DECLINE
        </Button>
      </Segment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 26px;
  width: 361px;
  height: 296px;
  box-shadow: 0 5px 7px -5px rgba(47, 47, 47, 0.4);
  background-color: white;
  transition: box-shadow 0.1s ease;
  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  }
  &:active {
    color: #ccd;
    background-color: white;
  }
  user-select: none;
  overflow: hidden;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 361px;
  height: 99px;
  background: #2382f4;
  border-radius: 26px 26px 0 0;
`;

const Help = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  font-weight: bold;
  font-size: 30px;
  color: #2382f4;
  border: 3px solid #e4e7f2;
  cursor: pointer;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 3px solid #2382f4;
  }
`;

const Segment = styled.div<{
  column?: boolean;
  width?: string;
  padding?: string;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}>`
  padding: ${(props) => (props.padding ? props.padding : '15px 16px 15px 16px')};
  display: flex;
  width: ${(props) => (props.width ? props.width : '100%')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'space-around')};
  align-items: ${(props) => (props.align ? props.align : 'stretch')};
`;

const Caption = styled.span`
  margin-left: 8px;
  font-family: Baloo Thambi, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

const Title = styled.span`
  font-family: Arial Hebrew Scholar, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.67);
`;

const Name = styled.span`
  font-family: Arial Hebrew Scholar, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #6e7891;
`;

const Button = styled.a<{primary?: boolean; width?: string}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ?? '193px'};
  height: 45px;
  border-radius: 32px;
  font-family: Arial Hebrew Scholar, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.color ?? 'white'};
  background-color: ${({primary}) => (primary ? '#1c6cf2' : '#e4e7f2')};
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({primary}) => (primary ? '#3180ff' : '#e9ecf3')};
  }
`;

const Profile = styled.img`
  height: 68px;
  width: 71px;
  border-radius: 20px;
  background-color: #333333;
`;
