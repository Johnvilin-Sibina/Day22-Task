import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
function Card({ item }) {
  return (
    <div className="col-md-4">
      <div className="card rounded-4" style={{ width: "10rem"}}>
        <div className="card-body">
          <h6 className="text-center title">{item.plan}</h6>
          <h3 className="text-center">{item.price}</h3>
          <hr className="line"></hr>
          <div className="card-text">
            {item.features.map((feature, index) => {
              return (
                <p key={index}>
                  {feature.enabled ? (
                    <span>
                      <TiTick /> {feature.name}
                    </span>
                  ) : (
                    <span style={{ color: "lightgrey" }}>
                      <ImCross size={8} /> {feature.name}
                    </span>
                  )}
                </p>
              );
            })}
          </div>
          <div>
            <a
              href="#"
              className={`w-100  btn rounded-5 ${
                item.buttonFocus ? "btn-primary" : "btn-primary disabled"
              }`}
            >
              BUTTON
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
