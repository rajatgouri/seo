import Sidebar from '@/components/Sidebar'

function users() {
  return (
    <>
      <Sidebar />
      <div className="home-page-wrapper mt-5">
        <div class="container mx-auto px-3">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
                Users
              </h1>
            </div>
            <div className="container py-12 flex justify-centery">
              <table class="styled-table w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col" className="small-hidden">Mail</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>John Doe</td>
                    <td className="small-hidden">johndoe@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>GmPatil</td>
                    <td className="small-hidden">gmpatil@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lorem Ipsum</td>
                    <td className="small-hidden">loremipsum@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>John Doe</td>
                    <td className="small-hidden">johndoe@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>GmPatil</td>
                    <td className="small-hidden">gmpatil@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Lorem Ipsum</td>
                    <td className="small-hidden">loremipsum@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>John Doe</td>
                    <td className="small-hidden">johndoe@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>GmPatil</td>
                    <td className="small-hidden">gmpatil@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Lorem Ipsum</td>
                    <td className="small-hidden">loremipsum@gmail.com</td>
                    <td>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default users
