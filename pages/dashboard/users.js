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
            <div className="container py-12 flex justify-center">
              <table class="styled-table">
                <thead className="bg-blue-500">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>John Doe</td>
                    <td>johndoe@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>GmPatil</td>
                    <td>gmpatil@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lorem Ipsum</td>
                    <td>loremipsum@gmail.com</td>
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
