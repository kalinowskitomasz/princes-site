import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Movie = styled.div`
  display: flex;
  justify-content: center;
`;

const CardExampleImageCard = ({
  title,
  poster,
  description,
  year,
  plot,
  prices,
}) => (
  <Movie>
    <Card>
      <Image src={poster} wrapped ui={false} />
      {year && <Card.Meta>{year}</Card.Meta>}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        {description && <Card.Description>description</Card.Description>}
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
  </Movie>
);

export default CardExampleImageCard;
