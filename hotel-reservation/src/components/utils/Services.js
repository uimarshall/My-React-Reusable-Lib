import React, { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";

import SectionTitle from "./SectionTitle";

const Services = () => {
	//  Consume ServiceContext:must be consumed inside d func
	const { services } = useContext(ServiceContext);

	return (
		<section className="services">
			<SectionTitle title="services" />
			<div className="services-center">
				{services.map(service => {
					return (
						<article key={service.id} className="service">
							<span>{service.icon}</span>
							<h6>{service.title}</h6>
							<p>{service.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
