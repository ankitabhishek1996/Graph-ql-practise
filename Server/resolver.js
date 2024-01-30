const temp = require("lodash");

const { Data, Movies } = require("./FakeData");

const resolvers = {
  Query: {
    users: () => Data,
    movies: () => Movies,
    selectedUser: (_parent, args) => {
      const id = args.id;
      return temp.find(Data, { id: Number(id) });
    },
    selectedMovie: (_parent,args)=>{
        const year = args.year;
        return temp.find(Movies,{year:Number(year)})
    },
  },

  Mutation:{
    createUser:(parent,args)=>{
        const user = args.input;
        user.id = Data.reduce((a,b)=> b).id+1;
        
        console.log(user.id,"--- ",user.name);
        Data.push(user);
        return user;
    }
  }
};
console.log(...Data);

module.exports = { resolvers };
