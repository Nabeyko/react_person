export const Person = ({ person }) => {
  let partnerInfo;

  if (person.isMarried) {
    let partnerType;

    if (person.sex === 'm') {
      partnerType = 'wife';
    } else if (person.sex === 'f') {
      partnerType = 'husband';
    }

    partnerInfo = (
      <p className="Person__partner">
        {`${person.partnerName} is my ${partnerType}`}
      </p>
    );
  } else {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  }

  const ageDisplay = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageDisplay}
      {partnerInfo}
    </section>
  );
};
