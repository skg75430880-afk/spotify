const songs = [
  {
    title: "Sanam Teri Kasam (Original Motion Picture Soundtrack)",
    artist: "Himesh Reshammiya . Sameer Anjaan . Subrat Sinha . Shabbir Ahmed",
    img: "https://i.scdn.co/image/ab67616d00001e02711c1639b4bc0f9978ae77a6",
    file: "songs/Sanam Teri Kasam, (Lyrical Video) - Harshvardhan, Mawra _ Ankit Tiwari _ Palak M _ Himesh Reshammiya.mp3",
  },
  {
    title: "Aashiqui 2",
    artist: "Mithoon . Ankit Tiwari . Jeet Gannguli",
    img: "https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3",
    file: "songs/चाहूँ मैं या ना पूरा वीडियो गाना आशिकी 2 _ आदित्य रॉय कपूर, श्रद्धा कपूर.mp3",
  },
  {
    title: 'Saiyaara (From "Saiyaara")',
    artist: "Tanishk Bagchi . Faheem Abdullah . Arslan Nizami . Irshad Kamil",
    img: "https://i.scdn.co/image/ab67616d0000b273a7e251b543c77a6ed356dfbe",
    file: "songs/Saiyaara Title Song _ Ahaan Panday, Aneet Padda _ Tanishk Bagchi, Faheem A, Arslan N _ Irshad Kamil.mp3",
  },
  {
    title: 'Raanjhan(From "Do Patti")',
    artist: "Sachet-Parampara . Parampara Tandon . Kausar Munir",
    img: "https://i.scdn.co/image/ab67616d00001e02773c5f60bcb309ef8802e4ef",
    file: "songs/Do Patti_ Raanjhan (Lyrics) Kriti Sanon, Shaheer Sheikh _ Parampara Tandon,Sachet-Parampara,Kausar.mp3",
  },
  {
    title: "Yeh Jawaani Hai Deewani",
    artist: "Pritam . Amitabh Bhattacharya . Kumaar . Irshad Kamil",
    img: "https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4",
    file: "songs/yeh_jawani_hai_deewani.mp3",
  },
  {
    title: "Ishq Mera (Feat.Esha Gupta)",
    artist: "Jubin Nautiyal . Akashdeep Sengupta . Mukund Suryawanshi",
    img: "https://i.scdn.co/image/ab67616d00001e02bc5c0e17452219b4ebe04917",
    file: "songs/Ishq Mera(Official Music Video)_ Jubin Nautiyal_Esha Gupta_Akashdeep S_Arif K _Mukund S _Bhushan K.mp3",
  },
  {
    title: 'Laal Pari (From "Housefull 5")',
    artist: "Yo Yo Honey Singh . SimarKaur . Alfaaz",
    img: "https://i.scdn.co/image/ab67616d00001e02e7a80f2e7ff3ef311f16a442",
    file: "songs/LAAL PARI (Song)_ Yo Yo Honey Singh _ Sajid Nadiadwala _ Tarun Mansukhani _ Housefull 5 - 6th June.mp3",
  },
  {
    title: 'Papa Meri Jaan (From "ANIMAL")',
    artist: "Sonu Nigam . Harshavardhan Rameshwar . Raj Shekhar",
    img: "https://i.scdn.co/image/ab67616d00001e023e472bda1ef3d7744c06c2e5",
    file: "songs/ANIMAL_ PAPA MERI JAAN (Song) _ Ranbir Kapoor _ Anil K,Rashmika M _ Sandeep V _Sonu Nigam _Bhushan K.mp3",
  },
  {
    title: "Mirzapur",
    artist: "Anand Bhaskar . John Stewart Eduri",
    img: "https://i.scdn.co/image/ab67616d00001e02c33c23574fba0d4f630ca8c5",
    file: "songs/Vaaroon Lyrical Video Song _ Mirzapur _ Ali Fazal, Shriya Pilgaonkar _ Amazon Original.mp3",
  },
  {
    title: "My Terrible Mind",
    artist: "Talha Anjum . Umair",
    img: "https://i.scdn.co/image/ab67616d0000b273690d99a57d0a8ae90eae4cb2",
    file: "songs/Talha Anjum - Departure Lane _ Prod. by Umair (Official Music Video).mp3",
  },
  {
    title: "Jugraafiya",
    artist: "Ajay-Atul . Udit Narayan . Shreya Ghoshal",
    img: "https://i.scdn.co/image/ab67616d0000b273e76275da5828d6f937c3bcf3",
    file: "songs/Jugraafiya - Lyrical _ Super 30 _ Hrithik Roshan & Mrunal Thakur _ Udit Narayan & Shreya Ghoshal.mp3",
  },
  {
    title: "Samjhawan",
    artist: "Jawad Ahmad",
    img: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    file: "songs/Arijit Singh, Shreya Ghoshal - Samjhawan - Lyric video _ Alia B, Varun D _ Humpty Sharma Ki Dulhania.mp3",
  },
  {
    title: "Metro...InDino(Side A)",
    artist: "Pritam",
    img: "https://i.scdn.co/image/ab67616d00001e02a2d5857ebcd5a4d5695ca8d4",
    file: "songs/Metro…In Dino_ Dil Ka Kya (Song) _ Anurag Basu _ Pritam, Raghav Chaitanya, Anurag S _ Bhushan Kumar.mp3",
  },
  {
    title: "Shree Hanuman Chalisa (Hanuman Asthak)",
    artist: "Hariharan",
    img: "https://i.scdn.co/image/ab67616d00001e026d9a2050e82ce05424dca5aa",
    file: "songs/हनुमान चालीसा उपशीर्षक के साथ [पूरा गीत] गुलशन कुमार, हरिहरन - श्री हनुमान चालीसा.mp3",
  },
  {
    title: "Hate Story 2",
    artist: "Various Artists",
    img: "https://i.scdn.co/image/ab67616d00001e02467cc511d190809571295e3f",
    file: "songs/Aaj Phir Full Video Song _ Hate Story 2 _ Arijit Singh _ Jay Bhanushali _ Surveen Chawla.mp3",
  },
  {
    title: "Hanuman Chalisa (Lo-Fi)",
    artist: "Rasraj Ji Maharaj . Baljeet Singh Chahal",
    img: "https://i.scdn.co/image/ab67616d00001e02979d859a7e3e53bd5a75c58b",
    file: "songs/Shree Hanuman Chalisa  (Lofi ) Version  श्री हनुमान चालीसा @OneRecords.mp3",
  },
  {
    title: "Ishq Bawla| Coke Studio Bharat",
    artist: "Dhanda Nyoliwala . Xvir Grewal",
    img: "https://i.scdn.co/image/ab67616d00001e02f42805148e916145f858318b",
    file: "songs/Ishq Bawla _ New Haryanvi Love Song 2025 _ Dhanda Nyoliwala _ Ishq bawal song.mp3",
  },
  {
    title: "Yeh Tune Kya Kiya",
    artist: "Pritam . LaxmiKant-Pyarelal . Anupam Amod",
    img: "https://i.scdn.co/image/ab67616d0000b273fe77bd21eb38ff74b5f21524",
    file: "songs/Yeh Tune Kya Kiya Song Once upon A Time In Mumbaai Dobara _ Pritam _ Akshay Kumar, Sonakshi Sinha.mp3",
  },
];

// --- GLOBALS ---
let library = [];
let currentSong = 0;
let isPlaying = false;

// --- DOM ELEMENTS ---
const cardContainer = document.querySelector(".cardContainer");
const playbarImg = document.querySelector(".cover-img");
const playbarTitle = document.querySelector(".song-title");
const playbarArtist = document.querySelector(".song-artist");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const seekBar = document.getElementById("seek-bar");
const volumeSlider = document.getElementById("volume");
const audio = document.getElementById("audio-player");
const libraryList = document.getElementById("library-list");
const sidebarSearchInput = document.getElementById("sidebar-search-input");

// --- RENDER CARDS ---
function renderCards(filter = "") {
  if (!cardContainer) return;
  cardContainer.innerHTML = "";
  let filteredSongs = songs;
  if (filter && filter.trim() !== "") {
    const f = filter.trim().toLowerCase();
    filteredSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(f) ||
        song.artist.toLowerCase().includes(f)
    );
  }
  filteredSongs.forEach((song, idx) => {
    const card = document.createElement("div");
    card.className = "card song-card";
    card.setAttribute("data-index", idx);
    card.innerHTML = `
      <div class="song-card-img-wrap">
        <img src="${song.img}" alt="cover" class="song-card-img">
        <button class="play-btn-on-img" title="Play">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="24" fill="#1ED760"/>
            <path d="M20 17L32 24L20 31V17Z" fill="black"/>
          </svg>
        </button>
      </div>
      <div class="song-card-info">
        <div class="song-card-title-row">
          <span class="song-card-title">${song.title}</span>
          <button class="menu-btn" title="More Options">&#8942;</button>
        </div>
        <div class="song-card-artist">${song.artist}</div>
        <div class="menu-dropdown">
          <div class="menu-option" data-action="add-library">➕ Add to Your Library</div>
          <div class="menu-option" data-action="add-queue">⏩ Add to queue</div>
          <div class="menu-option" data-action="artist-radio">📻 Go to artist radio</div>
          <div class="menu-option" data-action="add-playlist">➕ Add to playlist</div>
          <div class="menu-option" data-action="share">🔗 Share</div>
          <div class="menu-option" data-action="open-desktop">🖥️ Open in Desktop app</div>
        </div>
      </div>
    `;
    // Play button logic
    card.querySelector(".play-btn-on-img").onclick = (e) => {
      e.stopPropagation();
      loadSong(songs.indexOf(song));
      playSong();
    };

    // Play song on card click (not on menu click)
    card.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("menu-btn") ||
        e.target.classList.contains("menu-option")
      )
        return;
      loadSong(songs.indexOf(song));
      playSong();
    });

    // Menu button logic
    const menuBtn = card.querySelector(".menu-btn");
    const menuDropdown = card.querySelector(".menu-dropdown");
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      document
        .querySelectorAll(".menu-dropdown")
        .forEach((m) => (m.style.display = "none"));
      menuDropdown.style.display = "block";
    };
    // Menu option logic
    menuDropdown.querySelectorAll(".menu-option").forEach((opt) => {
      opt.onclick = function (e) {
        e.stopPropagation();
        menuDropdown.style.display = "none";
        const action = this.getAttribute("data-action");
        if (action === "add-library") addToLibrary(songs.indexOf(song));
        if (action === "add-queue") showToast("Added to queue!");
        if (action === "artist-radio") showToast("Go to artist radio!");
        if (action === "add-playlist") showToast("Added to playlist!");
        if (action === "share") showToast("Share link copied!");
        if (action === "open-desktop") showToast("Opening in Desktop app...");
      };
    });
    cardContainer.appendChild(card);
  });
}

// Hide menu when clicking outside
document.addEventListener("click", () => {
  document
    .querySelectorAll(".menu-dropdown")
    .forEach((m) => (m.style.display = "none"));
});

// --- LIBRARY ---
function addToLibrary(idx) {
  const song = songs[idx];
  if (
    !library.some(
      (libSong) =>
        libSong.title === song.title && libSong.artist === song.artist
    )
  ) {
    library.push(song);
    renderLibrary();
    showToast("Added to your library!");
  } else {
    showToast("Already in your library!");
  }
}

function removeFromLibrary(idx) {
  library.splice(idx, 1);
  renderLibrary();
  showToast("Removed from your library!");
}

function renderLibrary() {
  if (!libraryList) return;
  libraryList.innerHTML = "";
  library.forEach((song, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="library-song">
        <img src="${song.img}" alt="cover" class="library-song-img">
        <div class="library-song-info">
          <div class="library-song-title">${song.title}</div>
          <div class="library-song-artist">${song.artist}</div>
        </div>
        <button class="remove-btn" title="Remove">✖</button>
      </div>
    `;
    // Make info clickable to play song
    li.querySelector(".library-song-info").style.cursor = "pointer";
    li.querySelector(".library-song-info").onclick = () => {
      playSongFromLibrary(song);
    };
    // Remove button
    li.querySelector(".remove-btn").onclick = (e) => {
      e.stopPropagation();
      removeFromLibrary(idx);
    };
    libraryList.appendChild(li);
  });
}

// --- LIBRARY STORAGE ---
function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(library));
}

function loadLibrary() {
  const stored = localStorage.getItem("library");
  if (stored) {
    library = JSON.parse(stored);
    renderLibrary();
  }
}

// --- PLAYBAR ---
function playSongFromLibrary(song) {
  playbarImg.src = song.img;
  playbarTitle.textContent = song.title;
  playbarArtist.textContent = song.artist;
  audio.src = song.file;
  seekBar.value = 0;
  playSong();
}

function loadSong(index) {
  const song = songs[index];
  playbarImg.src = song.img;
  playbarTitle.textContent = song.title;
  playbarArtist.textContent = song.artist;
  audio.src = song.file;
  currentSong = index;
  seekBar.value = 0;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸️";
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶️";
}
playBtn.onclick = () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
};
prevBtn.onclick = () => {
  let idx = (currentSong - 1 + songs.length) % songs.length;
  loadSong(idx);
  playSong();
};
nextBtn.onclick = () => {
  let idx = (currentSong + 1) % songs.length;
  loadSong(idx);
  playSong();
};
audio.addEventListener("ended", () => {
  nextBtn.onclick();
});

// --- SEEKBAR & VOLUME ---
audio.addEventListener("timeupdate", () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
});
seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});

// --- SIDEBAR SEARCH FUNCTIONALITY ---
if (sidebarSearchInput) {
  sidebarSearchInput.addEventListener("input", () => {
    renderCards(sidebarSearchInput.value);
  });
}

// --- TOAST ---
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}

// --- SIGNUP/LOGIN MODAL FUNCTIONALITY ---
document.querySelector(".btn-signup").onclick = (e) => {
  e.stopPropagation();
  document.getElementById("signup-modal").style.display = "flex";
};
document.querySelector(".btn-login").onclick = (e) => {
  e.stopPropagation();
  document.getElementById("login-modal").style.display = "flex";
};
document.getElementById("close-signup").onclick = (e) => {
  e.stopPropagation();
  document.getElementById("signup-modal").style.display = "none";
};
document.getElementById("close-login").onclick = (e) => {
  e.stopPropagation();
  document.getElementById("login-modal").style.display = "none";
};
document.getElementById("open-login").onclick = (e) => {
  e.preventDefault();
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("login-modal").style.display = "flex";
};
document.getElementById("open-signup").onclick = (e) => {
  e.preventDefault();
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "flex";
};
// Close modal on outside click (but not when clicking inside modal content)
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

// --- SIGNUP MODAL: EMAIL/PHONE TOGGLE & PROVIDER BUTTONS ---
const toggleSignupMethod = document.getElementById("toggle-signup-method");
const signupEmail = document.getElementById("signup-email");
const signupPhone = document.getElementById("signup-phone");
const signupLabel = document.getElementById("signup-label");
let usingEmail = true;

toggleSignupMethod.onclick = function (e) {
  e.preventDefault();
  if (usingEmail) {
    signupEmail.style.display = "none";
    signupPhone.style.display = "";
    signupLabel.textContent = "Phone number";
    toggleSignupMethod.textContent = "Use email instead.";
    usingEmail = false;
  } else {
    signupEmail.style.display = "";
    signupPhone.style.display = "none";
    signupLabel.textContent = "Email address";
    toggleSignupMethod.textContent = "Use phone number instead.";
    usingEmail = true;
  }
};

// --- DEMO: SIGNUP/LOGIN FORM SUBMIT ---
document.getElementById("signup-next").onclick = function (e) {
  e.preventDefault();
  if (usingEmail) {
    const email = signupEmail.value.trim();
    if (email) {
      alert("Signup with email: " + email);
      document.getElementById("signup-modal").style.display = "none";
    } else {
      alert("Please enter your email address.");
    }
  } else {
    const phone = signupPhone.value.trim();
    if (phone) {
      alert("Signup with phone: " + phone);
      document.getElementById("signup-modal").style.display = "none";
    } else {
      alert("Please enter your phone number.");
    }
  }
};
document.getElementById("login-next").onclick = function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  if (email) {
    alert("Login with: " + email);
    document.getElementById("login-modal").style.display = "none";
  } else {
    alert("Please enter your email address.");
  }
};

// --- SIGNUP PROVIDER BUTTONS ---
document.getElementById("signup-google-btn").onclick = function (e) {
  e.preventDefault();
  alert("Google signup is not implemented in this demo.");
};
document.getElementById("signup-apple-btn").onclick = function (e) {
  e.preventDefault();
  alert("Apple signup is not implemented in this demo.");
};

// --- LIBRARY PLUS BUTTON FUNCTIONALITY ---
const plusBtn = document.getElementById("library-plus-btn");
const plusIcon = document.getElementById("library-plus-icon");
const menu = document.getElementById("library-menu");

plusBtn.onclick = function (e) {
  e.stopPropagation();
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    plusIcon.textContent = "×";
  } else {
    menu.style.display = "none";
    plusIcon.textContent = "+";
  }
};

// Hide menu when clicking outside
window.addEventListener("click", function (e) {
  if (
    !menu.contains(e.target) &&
    e.target !== plusBtn &&
    e.target !== plusIcon
  ) {
    menu.style.display = "none";
    plusIcon.textContent = "+";
  }
});

// Functional options
menu.querySelectorAll(".library-menu-option").forEach((opt) => {
  opt.onclick = function (e) {
    const action = this.getAttribute("data-action");
    menu.style.display = "none";
    plusIcon.textContent = "+";
    if (action === "playlist") {
      alert("Create Playlist clicked!");
    }
    if (action === "blend") {
      alert("Blend clicked!");
    }
    if (action === "folder") {
      alert("Folder clicked!");
    }
  };
});

// --- INITIAL LOAD ---
loadLibrary();
loadSong(0);
renderCards();
