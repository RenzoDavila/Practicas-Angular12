export class City {
  name: String;
  state: String;
  country: String;
  constructor(name: String, state: String, country: String) {
    this.name = name;
    this.state = state;
    this.country = country;
  }
  toString() {
    return this.name + ', ' + this.state + ', ' + this.country;
  }
  // Firestore data converter
  cityConverter = {
    toFirestore: (city: City) => {
      return {
        name: city.name,
        state: city.state,
        country: city.country,
      };
    },
    fromFirestore: (snapshot: { data: (arg0: any) => any }, options: any) => {
      const data = snapshot.data(options);
      return new City(data.name, data.state, data.country);
    },
  };
}
