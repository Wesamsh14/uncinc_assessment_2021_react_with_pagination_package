import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import CastCard from './CastCard';

function Casts({ casts, pageCount, changePage }) {
  const styles = {
    castsRoot: {
      width: '98%',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridGap: '20px',
      justifyContent: 'end',
      marginTop: '10px'
    }
  };
  return (
    <div>
      <div style={styles.castsRoot}>
        {casts && casts.map((cast) => (
          <CastCard key={cast.id} cast={cast} />
        ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationButtons"
        activeClassName="paginationActive"
      />
    </div>
  );
}

Casts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  casts: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired

};

export default Casts;
