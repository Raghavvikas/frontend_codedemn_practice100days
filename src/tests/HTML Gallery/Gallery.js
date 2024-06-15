import React from 'react';

import first from "./assets/1.jpg"
import second from "./assets/2.jpg"
import third from "./assets/3.jpg"
import fourth from "./assets/4.jpg"
import fifth from "./assets/5.jpg"
import sixth from "./assets/6.jpg"
import seventh from "./assets/7.jpg"
import eighth from "./assets/8.jpg"
import ninth from "./assets/9.jpg"
import tenth from "./assets/10.jpg"
import eleventh from "./assets/11.jpg"
import twelvth from "./assets/12.jpg"
import info from "./assets/info.png"

const Gallery = () => {
	return (
		<div>
			<div id="gallery-container">
				<article class="img-container">
					<img class="gallery-image" src={first} alt="img1" />
					<span class="title">Image 1</span>
				</article>

				<article class="img-container">
					<img class="gallery-image" src={second} alt="img2" />
					<span class="title">Image 2</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={third} alt="img3" />
					<span class="title">Image 3</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={fourth} alt="img4" />
					<span class="title">Image 4</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={fifth} alt="img5" />
					<span class="title">Image 5</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={sixth} alt="img6" />
					<span class="title">Image 6</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={seventh} alt="img7" />
					<span class="title">Image 7</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={eighth} alt="img8" />
					<span class="title">Image 8</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={ninth} alt="img9" />
					<span class="title">Image 9</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={tenth} alt="img10" />
					<span class="title">Image 10</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={eleventh} alt="img11" />
					<span class="title">Image 11</span>
				</article>
				<article class="img-container">
					<img class="gallery-image" src={twelvth} alt="img12" />
					<span class="title">Image 12</span>
				</article>
			</div>
			<footer>
				<p id="footer-title">Multiverse Gallery Project</p>
				<p id="about">
					About<img src={info} id="info-icon" alt="icon" />
				</p>
			</footer>
		</div>
	)
}

export default Gallery

