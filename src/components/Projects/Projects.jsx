import { useEffect ,useState } from "react";

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
  const [data,setData] = useState(null)

  const fetchData = () => {
    fetch(USERS_URL).then((data)=>{
      setData(data)
    })
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  const elements = data.results.map((value) => {
   return <tr key={value.id} >
        <td>{value.id}</td>
        <td>{value.firstName}</td>
        <td>{value.lastName}</td>
    </tr>
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
};



// import classes from './Projects.module.scss';
// const Projects = () => {
//   return (
//     <div className={classes.projects}>Projects</div>
//   )
// }

// export default Projects