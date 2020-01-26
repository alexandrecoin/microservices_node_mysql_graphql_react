import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import AddListing from './AddListing';

const Listing = styled.div`
  padding: 1rem 0;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.veryLightGrey};
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const query = gql`
  {
    listings {
      description
      id
      title
    }
  }
`;

const Listings = () => {
  const { data, loading } = useQuery(query);

  if (loading) return 'Loading...';

  return (
    <div>
      <div>
        {/* {data.listings.map((listing) => {
          <Listing key={listing.id}>
            <Title>{listing.title}</Title>
            <Description>{listing.description}</Description>
          </Listing>;
        })} */} Listing
      </div>
      <AddListing />
    </div>
  );
};

export default Listings;
