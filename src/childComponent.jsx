function ChildComponent(props) {
  const { pet, toggleMood, feedTreat } = props;

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", display: "inline-block" }}>
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} width="150" />
      <p>Status: {pet.isHappy ? "Happy " : "Sad "}</p>
      <p>Treat: {pet.hasTreat ? " Yes" : "No"}</p>

      <button onClick={() => toggleMood(pet.id)}>Interact</button>
      <button onClick={() => feedTreat(pet.id)}>
        {pet.hasTreat ? "Remove Treat" : "Give Treat"}
      </button>
    </div>
  );
}

export default ChildComponent;