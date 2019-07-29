import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
	return (
		<React.Fragment>
			<section className="header">
				<div className="side-menu" id="side-menu">
					<ul>
						<li>
							<Link>PHONES</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>COMPUTING</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>ELECTRONICS</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>HOME & OFFICE</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>FASHION</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />

							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>HEALTH & BEAUTY</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>GAMING</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>GROCERY</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>BABY</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>LIQOUR</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>RECIPES</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>SPECIALS</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
						<li>
							<Link>OTHER CATEGORIES</Link>
							<i class="fa fa-angle-right" aria-hidden="true" />
							<ul>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
								<li>sub-menu1</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</React.Fragment>
	);
};

export default SidebarMenu;
