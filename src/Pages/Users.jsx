import React from 'react'
import "./Users.css"
import Pagination from "./Pagination";
function Users({
  user,
  postsPerPage,
  paginate,
  totalPosts,
  nPages,
  currentPage,
  setCurrentPage,
  nextPage,
  prevPage,
  loading,
}) {
  return (
    <>
      <div className="profile">
        {loading ? (
          <div className=" loading">Loading.....</div>
        ) : (
          user?.map((person) => {
            return (
              <div
                key={person.name.first}
                className="profile__wrapper"
              >
                <img
                  src={person.picture.large}
                  alt=""
                  className="profile__image"
                />

                <div className="profile__detail">
                  <p className='profile__title'> <span>Name: </span>
                    {person.name.title} {person.name.first}
                    {person.name.last}
                  </p>
                  <p className='profile__gender'> <span>Gender: </span> {person.gender}</p>
                  <p className=" profile__email"> <span>Email: </span>{person.email}</p>
                  <p className='profile__location'> <span>Country: </span> {person.location.country}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        postsPerPage={postsPerPage}
        totalPosts={6}
        paginate={paginate}
      />
    </>
  );
}

export default Users;