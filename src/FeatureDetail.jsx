import React from "react";
import { useParams, Link } from "react-router-dom";
import "./index.css";

function FeatureDetail() {
  const { id } = useParams();

  const featureData = {
    smoke: {
      title: "Dynamic Smoke Grenades",
      description:
        "Smoke grenades in CS2 react to bullets and environment.",
    },
    graphics: {
      title: "Improved Graphics",
      description:
        "CS2 features realistic lighting and textures.",
    },
    tick: {
      title: "Sub-Tick System",
      description:
        "More accurate and responsive gameplay.",
    },
    maps: {
      title: "Updated Maps",
      description:
        "Classic maps rebuilt with better visuals.",
    },
  };

  const feature = featureData[id];

  if (!feature) {
    return <h2>Feature not found</h2>;
  }

  return (
    <div className="container">
      <h1>{feature.title}</h1>
      <p>{feature.description}</p>

      <Link to="/" className="link">
        ← Back
      </Link>
    </div>
  );
}

export default FeatureDetail;