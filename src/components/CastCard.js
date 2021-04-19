import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

export default function CastCard({ cast }) {
  const styles = {
    castFrontImage: {
      height: '100%',
      borderRadius: '13px'
    },
    castBackImage: {
      height: '50%',
      borderRadius: '13px'
    },
    castCardBodySpan: {
      color: 'blue'
    }
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <Card className="castCard" onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
        <ReactCardFlip
          isFlipped={isFlipped}
        >
          <div style={styles.castFrontImage}>
            <Card.Img style={styles.castFrontImage} src={cast.imageUrl} alt={cast.image} />
          </div>
          <div style={{
            height: '100%'
          }}
          >
            <Card.Img style={styles.castBackImage} src={cast.imageUrl} alt={cast.image} />
            <Card.Header style={{
              marginTop: '10px'
            }}
            >
              {cast.fullName}
            </Card.Header>
            <Card.Subtitle
              style={{
                marginTop: '10px'
              }}
              className="mb-2 text-muted"
            >
              {cast.title}
            </Card.Subtitle>
            <Card.Body style={{
              textAlign: 'left', padding: 0, marginLeft: '10px'
            }}
            >
              <Card.Text>
                {cast.family}
              </Card.Text>
            </Card.Body>
          </div>
        </ReactCardFlip>
      </Card>
    </div>
  );
}

CastCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cast: PropTypes.object.isRequired
};
