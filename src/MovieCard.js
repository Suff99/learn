import { React, useState } from 'react';
import { Card, Button, Collapse, Modal } from 'react-bootstrap'


const MovieCard = ({ movie }) => {

    const data = movie;

    const [isDisplayingInfo, showInformation] = useState(false);
    const [trailerShowing, showTrailer] = useState(false);


    return (
        <div>
            <Modal show={trailerShowing} dialogClassName="custom-scale-modal" centered>
                <Modal.Header>
                    <Card.Title>{data.title} Trailer</Card.Title>
                </Modal.Header>

                <Modal.Body>
                    <iframe width="600" height="315" src="https://www.youtube.com/embed/DS0vuwr5bV8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" centered></iframe>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="primary" onClick={() => showTrailer(!trailerShowing)}>Close</Button>
                </Modal.Footer>
            </Modal>



            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.image} onClick={() => showInformation(!isDisplayingInfo)} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Collapse in={isDisplayingInfo}>
                        <div id="more_info">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                            <div>
                                <Button variant="primary" onClick={() => showTrailer(!trailerShowing)}>Trailer</Button> <Button variant="primary">Information</Button>
                            </div>
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;


/*
function createReleaseCard($movie)
{
    echo '
    <div class="col-sm"> 
    <div class="card" style="width: 20rem; margin-bottom: 25px;">';

    echo '<a data-toggle="collapse" class="zoom" href="#release_' . $movie['id'] . '" role="button" aria-expanded="false" aria-controls="collapse"><div class="card bg-dark text-white">
    <img class="card-img title_image" src="' . str_replace("https://image.tmdb.org/t/p/original/","https://image.tmdb.org/t/p/w300_and_h450_bestv2/", json_decode($movie['images'])->poster) . '" alt="' . $movie['title'] . ' logo">
    <div class="card-img-overlay">';
    echo '<h1 class="card-title">' . createMovieBadge($movie) . '</h1>';
    echo '<i class="' . ($movie['release_type'] == "movie" ? "bi bi-film" : "bi bi-tv-fill") . '" >' . '</i>
    </div>
  </div></a>';

    echo '<div class="card-body">';
    echo '<h5 class="card-title">' . $movie['title'] . '</h5>';
    echo '<div class="collapse" id="release_' . $movie['id'] . '">';
    echo '<p class="card-text">' . $movie['tagline'] . '</p>';
    echo '<button type="button" class="btn btn-primary video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/' . $movie['trailer'] . '" data-target="#v_modal">
    Trailer
  </button>';
    echo '  <a name="info" href="release.php?id=' . $movie['id'] . '" class="btn btn-primary">More Info</a>';
    echo '</div>';

    echo '</div></div></div> <br><br><br><br><br><br>';
}

*/

