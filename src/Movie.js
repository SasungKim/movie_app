import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, summary, poster, year, genre }) {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__data">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres">
					{genre.map((genre, index) => (
						<li className="genres__genre" key={index}>
							{genre}
						</li>
					))}
				</ul>
				<p className="movie__summary">{summary.slice(0, 140)}...</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
