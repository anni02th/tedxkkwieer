import React from 'react'
import Timeline from './timeline'

const Details = () => {
  return (
    <div>
      <section id="about" class="py-16 px-6 md:px-10 lg:px-20">
        <div class="container mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">About TEDxKKWIEER</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-6 md:mb-0">
                    <img src="https://dummyimage.com/600x400/fff/f00&text=About+TEDx" alt="About TEDx" class="rounded-lg shadow-lg"/>
                </div>
                <div class="md:w-1/2 md:pl-10">
                    <p class="text-lg mb-4">
                        TEDxKKWIEER is an independently organized TED event at the K. K. Wagh Institude of Engineering Education and Research Nashik.
                        We aim to bring together bright minds to give talks that are idea-focused, and on a wide range
                        of subjects, to foster learning, inspiration, and wonder – and provoke conversations that matter.
                    </p>
                    <p class="text-lg">
                        Our mission is to spread the spirit of TED's mission, "Ideas Worth Spreading," within our
                        community and beyond. We believe in the power of ideas to change attitudes, lives, and,
                        ultimately, the world.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Speakers Section --> */}
    <section id="speakers" class="py-16 px-6 md:px-10 lg:px-20 bg-gray-900">
        <div class="container mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">Speakers</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Speaker Card Example --> */}
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+1" alt="Speaker 1" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                {/* <!-- Repeat for other speakers --> */}
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+2" alt="Speaker 2" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+3" alt="Speaker 3" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+4" alt="Speaker 4" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+5" alt="Speaker 5" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden">
                    <img src="https://dummyimage.com/400x300/fff/f00&text=Speaker+6" alt="Speaker 6" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Speaker Name</h3>
                        <p class="text-gray-400">Speaker's Title/Profession</p>
                    </div>
                </div>
                {/* <!-- ... --> */}
            </div>
        </div>
    </section>
    {/* <!--Partners Section--> */}
    <section id="partners" class="py-16 px-6 md:px-10 lg:px-20">
        <h1 class="text-center text-white text-4xl mb-8 font-bold">Our Partners</h1>
        <div class="flex flex-row flex-wrap w-full justify-center items-center gap-8">
            <img src="https://dummyimage.com/200x100/fff/f00&text=Partner+1" alt="Partner Logo 1" class="object-contain"/>
            <img src="https://dummyimage.com/200x100/fff/f00&text=Partner+2" alt="Partner Logo 2" class="object-contain"/>
            <img src="https://dummyimage.com/200x100/fff/f00&text=Partner+3" alt="Partner Logo 3" class="object-contain"/>
            <img src="https://dummyimage.com/200x100/fff/f00&text=Partner+4" alt="Partner Logo 4" class="object-contain"/>
            <img src="https://dummyimage.com/200x100/fff/f00&text=Partner+5" alt="Partner Logo 5" class="object-contain"/>
        </div>
    </section>


    {/* <!-- Team Section --> */}
    <section id="team" class="py-16 px-6 md:px-10 lg:px-20 bg-gray-900">
        <div class="container mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">Meet the Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Team Member Card Example --> */}
                <div class="bg-black rounded-lg shadow-lg overflow-hidden text-center">
                    <img src="https://dummyimage.com/300x300/fff/f00&text=Team+Member" alt="Team Member 1" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Member Name</h3>
                        <p class="text-gray-400">Role</p>
                    </div>
                </div>
                {/* <!-- Repeat for other team members --> */}
                <div class="bg-black rounded-lg shadow-lg overflow-hidden text-center">
                    <img src="https://dummyimage.com/300x300/fff/f00&text=Team+Member" alt="Team Member 2" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Member Name</h3>
                        <p class="text-gray-400">Role</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden text-center">
                    <img src="https://dummyimage.com/300x300/fff/f00&text=Team+Member" alt="Team Member 3" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Member Name</h3>
                        <p class="text-gray-400">Role</p>
                    </div>
                </div>
                <div class="bg-black rounded-lg shadow-lg overflow-hidden text-center">
                    <img src="https://dummyimage.com/300x300/fff/f00&text=Team+Member" alt="Team Member 4" class="w-full"/>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Member Name</h3>
                        <p class="text-gray-400">Role</p>
                    </div>
                </div>
                {/* <!-- ... --> */}
            </div>
        </div>
    </section>

    <Timeline/>

    {/* <!-- Contact Section -->/ */}
    <section id="contact" class="py-16 px-6 md:px-10 lg:px-20">
        <div class="container mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">Contact Us</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-6 md:mb-0">
                  <form class="space-y-4">
                    <div>
                        <label for="name" class="block text-gray-300">Name:</label>
                        <input type="text" id="name" name="name" class="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-red-500"/>
                    </div>
                    <div>
                        <label for="email" class="block text-gray-300">Email:</label>
                        <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-red-500"/>
                    </div>
                    <div>
                        <label for="message" class="block text-gray-300">Message:</label>
                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-red-500"></textarea>
                    </div>
                    <button type="submit" class="bg-red-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out">
                        Send Message
                    </button>
                  </form>
                </div>
                <div class="md:w-1/2 md:pl-10">
                    <p class="text-lg mb-4">
                        Reach out to us if you have any questions, suggestions, or if you're interested in
                        sponsoring or speaking at our event.
                    </p>
                    <p class="text-lg">
                        Email: <a href="mailto:TEDxKKWIEER@example.com" class="text-red-600 hover:underline">TEDxKKWIEER@example.com</a>
                    </p>
                    <div class="mt-6">
                        <a href="#" class="text-red-600 hover:text-red-700 mr-4"><i class="fab fa-twitter text-2xl"></i></a>
                        <a href="#" class="text-red-600 hover:text-red-700 mr-4"><i class="fab fa-facebook text-2xl"></i></a>
                        <a href="#" class="text-red-600 hover:text-red-700 mr-4"><i class="fab fa-instagram text-2xl"></i></a>
                        <a href="#" class="text-red-600 hover:text-red-700"><i class="fab fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Details
