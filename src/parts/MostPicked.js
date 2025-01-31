import React from "react";
import Button from 'elements/Button/index'

export default function MostPicked(props) {
  return (
    <section className="section container" ref={props.refMostPicked}>
      <h4 className="mb-3">
        <b>Most Picked</b>
      </h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div key={`mostpicked-${index}`} className={`item column-4${index===0?" row-2":" row-1"}`}>
              <div className="card card-feature">
                  <div className="tag">
                      ${item.price}
                    <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                    <img src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"/>
                </figure>
                <div className="meta-wrapper">
                    <Button type="link" className="streched-link d-bloc text-white" href={`/properties/${item._id}`}>
                        <h5>{item.name}</h5>
                    </Button>
                    <span>
                        {item.city}, {item.country}
                    </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
