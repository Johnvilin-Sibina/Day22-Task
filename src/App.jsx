import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Card";
function App() {
  let data = [
    {
      plan: "FREE",
      price: "$0/month",
      features: [
        {
          name: "Single User",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: false,
        },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        {
          name: "Free Subdomain",
          enabled: false,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
      buttonFocus: false,
    },
    {
      plan: "PLUS",
      price: "$9/month",
      features: [
        {
          name: "5 Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
      buttonFocus: false,
    },
    {
      plan: "PRO",
      price: "$49/month",
      features: [
        {
          name: "Unlimited Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly Status Reports",
          enabled: true,
        },
      ],
      buttonFocus: true,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
