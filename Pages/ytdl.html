
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youtube Downloader</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Inter Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Gradient background */
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #e0e0e0;
            padding: 20px;
            box-sizing: border-box;
        }

        .glass-container {
            background: rgba(255, 255, 255, 0.1); /* Slightly transparent white */
            backdrop-filter: blur(10px); /* Glass effect blur */
            -webkit-backdrop-filter: blur(10px); /* Safari support */
            border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); /* Shadow for depth */
            padding: 30px;
            width: 100%;
            max-width: 700px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        input[type="text"] {
            background: rgba(255, 255, 255, 0.15); /* Input background */
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 10px;
            width: 100%;
            margin-bottom: 20px;
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
        }

        input[type="text"]::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }

        input[type="text"]:focus {
            border-color: #a78bfa; /* Purple border on focus */
            box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.5);
        }

        button {
            background: linear-gradient(45deg, #8b5cf6 0%, #a78bfa 100%); /* Button gradient */
            color: white;
            padding: 12px 25px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .loader {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #a78bfa;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin-top: 20px;
            display: none; /* Hidden by default */
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .result-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 25px;
            margin-top: 30px;
            width: 100%;
            max-width: 600px;
            display: none; /* Hidden by default */
            flex-direction: column;
            align-items: center;
            text-align: left;
        }

        /* Aspect ratio container for thumbnail */
        .thumbnail-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100%) */
            border-radius: 10px;
            overflow: hidden; /* Ensures the image doesn't overflow rounded corners */
            margin-bottom: 20px; /* Space below the thumbnail */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .thumbnail-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures the image covers the area, cropping if necessary */
            border-radius: 10px; /* Apply border-radius to the image as well for consistency */
        }

        .download-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px; /* Space between MP3 and Video sections */
            margin-top: 20px;
        }

        .download-item {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 10px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .download-item a, .download-item button, .download-item select {
            display: block;
            width: 100%;
            padding: 10px 15px;
            border-radius: 8px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            border: none;
            cursor: pointer;
        }

        .download-item a.mp3-btn {
            background: linear-gradient(45deg, #10b981 0%, #34d399 100%); /* Green gradient for MP3 */
            color: white;
        }

        .download-item a.mp3-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
        }

        .download-item select {
            background: rgba(255, 255, 255, 0.15);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            -webkit-appearance: none; /* Remove default arrow for custom styling */
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23ffffff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 0.7rem top 50%;
            background-size: 1.2rem auto;
            cursor: pointer;
            outline: none;
        }

        .download-item select option {
            background-color: #3b82f6; /* Darker background for options */
            color: white;
        }

        .download-item button.video-download-btn {
            background: linear-gradient(45deg, #3b82f6 0%, #60a5fa 100%); /* Blue gradient for video button */
            color: white;
        }

        .download-item button.video-download-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
        }

        .download-item button.next-download-btn {
            background: linear-gradient(45deg, #f97316 0%, #fb923c 100%); /* Orange gradient for next button */
            color: white;
            margin-top: 5px; /* Small margin from the button above */
        }

        .download-item button.next-download-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
        }

        footer {
            margin-top: 40px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .glass-container {
                padding: 20px;
            }
            input[type="text"] {
                font-size: 0.9rem;
            }
            button {
                font-size: 1rem;
                padding: 10px 20px;
            }
            .result-container {
                padding: 20px;
            }
            .download-item a, .download-item button, .download-item select {
                padding: 8px 12px;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="glass-container">
        <h1 class="text-4xl font-bold mb-6 text-white">Youtube Downloader</h1>
        <div class="w-full flex flex-col items-center">
            <input type="text" id="queryInput" placeholder="Enter song name or YouTube URL" class="mb-4">
            <button id="downloadButton">Download Now</button>
        </div>

        <div id="loader" class="loader"></div>

        <div id="resultContainer" class="result-container">
            <div class="thumbnail-container">
                <img id="thumbnail" src="" alt="Thumbnail">
            </div>
            <h2 id="videoTitle" class="text-2xl font-semibold mb-2 text-white"></h2>
            <p class="text-gray-300 mb-1">Duration: <span id="videoDuration"></span></p>
            <p class="text-gray-300 mb-1">Views: <span id="videoViews"></span></p>
            <p class="text-gray-300 mb-4">Published: <span id="videoPublished"></span></p>

            <div class="download-section">
                <!-- MP3 Download Section -->
                <div class="download-item">
                    <h3 class="text-xl font-medium text-white">Download MP3</h3>
                    <a id="audioDownloadLink" href="#" target="_blank" class="mp3-btn" style="display: none;">
                        Download MP3 (<span id="audioQuality"></span>)
                    </a>
                </div>

                <!-- Video Download Section -->
                <div class="download-item">
                    <h3 class="text-xl font-medium text-white">Download Video</h3>
                    <select id="videoQualitySelect" class="w-full" style="display: none;">
                        <!-- Hardcoded options for display -->
                        <option value="360p">360p</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                    </select>
                    <button id="videoDownloadTrigger" class="video-download-btn" style="display: none;">
                        Download Video
                    </button>
                    <button id="downloadNextButton" class="next-download-btn" style="display: none;">
                        Download Next
                    </button>
                </div>
            </div>
        </div>

        <div id="messageBox" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
                <p id="messageText" class="text-gray-800 text-lg mb-4"></p>
                <button id="closeMessageBox" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                    OK
                </button>
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; © ɪɴᴅᴜᴡᴀʀᴀ ᴍᴅ ᴡᴇʙ</p>
    </footer>

    <script>
        // Get references to DOM elements
        const queryInput = document.getElementById('queryInput');
        const downloadButton = document.getElementById('downloadButton');
        const loader = document.getElementById('loader');
        const resultContainer = document.getElementById('resultContainer');
        const thumbnail = document.getElementById('thumbnail');
        const videoTitle = document.getElementById('videoTitle');
        const videoDuration = document.getElementById('videoDuration');
        const videoViews = document.getElementById('videoViews');
        const videoPublished = document.getElementById('videoPublished');
        const audioDownloadLink = document.getElementById('audioDownloadLink');
        const audioQualitySpan = document.getElementById('audioQuality');
        const videoQualitySelect = document.getElementById('videoQualitySelect');
        const videoDownloadTrigger = document.getElementById('videoDownloadTrigger');
        const downloadNextButton = document.getElementById('downloadNextButton'); // New button
        const messageBox = document.getElementById('messageBox');
        const messageText = document.getElementById('messageText');
        const closeMessageBox = document.getElementById('closeMessageBox');

        let currentVideoDownloadUrl = null; // To store the single video download URL from the API

        // Function to show a custom message box
        function showMessageBox(message) {
            messageText.textContent = message;
            messageBox.classList.remove('hidden');
        }

        // Event listener for closing the message box
        closeMessageBox.addEventListener('click', () => {
            messageBox.classList.add('hidden');
        });

        // Function to fetch data from the API with exponential backoff
        async function fetchDataWithRetry(url) {
            let retries = 0;
            const maxRetries = 5;
            const initialDelay = 1000; // 1 second

            while (retries < maxRetries) {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return await response.json();
                } catch (error) {
                    retries++;
                    if (retries < maxRetries) {
                        const delay = initialDelay * Math.pow(2, retries - 1); // Exponential backoff
                        await new Promise(res => setTimeout(res, delay));
                    } else {
                        throw error; // Re-throw if max retries reached
                    }
                }
            }
        }

        // Event listener for the download button click
        downloadButton.addEventListener('click', async () => {
            const query = queryInput.value.trim();
            if (!query) {
                showMessageBox('Please enter a song name or YouTube URL.');
                return;
            }

            // Show loader and hide previous results
            loader.style.display = 'block';
            resultContainer.style.display = 'none';
            audioDownloadLink.style.display = 'none';
            videoQualitySelect.style.display = 'none';
            videoDownloadTrigger.style.display = 'none';
            downloadNextButton.style.display = 'none'; // Hide new button
            currentVideoDownloadUrl = null; // Reset the download URL

            try {
                // Fetch data from the primary API URL
                const apiUrl = `https://apis.davidcyriltech.my.id/song?query=${encodeURIComponent(query)}`;
                const data = await fetchDataWithRetry(apiUrl);

                if (data.status && data.result) {
                    const result = data.result;

                    // Update thumbnail and video details
                    thumbnail.src = result.thumbnail || 'https://placehold.co/1280x720/cccccc/333333?text=No+Thumbnail'; // Using 1280x720 placeholder
                    videoTitle.textContent = result.title;
                    videoDuration.textContent = result.duration;
                    videoViews.textContent = result.views.toLocaleString();
                    videoPublished.textContent = result.published;

                    // Populate audio download link
                    if (result.audio && result.audio.download_url) {
                        audioDownloadLink.href = result.audio.download_url;
                        audioQualitySpan.textContent = result.audio.quality;
                        audioDownloadLink.style.display = 'block';
                    } else {
                        audioDownloadLink.style.display = 'none';
                    }

                    // Store the single video download URL provided by the API
                    if (result.video && result.video.download_url) {
                        currentVideoDownloadUrl = result.video.download_url;
                        videoQualitySelect.style.display = 'block'; // Show the dropdown
                        videoDownloadTrigger.style.display = 'block'; // Show the download button
                        downloadNextButton.style.display = 'block'; // Show the new button

                        // Set the initially selected option in the dropdown to match API's quality
                        // This will visually select it if it's one of the hardcoded options
                        for (let i = 0; i < videoQualitySelect.options.length; i++) {
                            if (videoQualitySelect.options[i].value === result.video.quality) {
                                videoQualitySelect.selectedIndex = i;
                                break;
                            }
                        }
                    } else {
                        videoQualitySelect.style.display = 'none';
                        videoDownloadTrigger.style.display = 'none';
                        downloadNextButton.style.display = 'none'; // Hide new button if no video
                        showMessageBox('No video download link found for your query.');
                    }

                    // Show the result container
                    resultContainer.style.display = 'flex';
                } else {
                    showMessageBox(data.message || 'Could not find any results for your query. Please try again.');
                }
            } catch (error) {
                console.error('Error in main fetch process:', error);
                showMessageBox('An error occurred while fetching data. Please check your input or try again later.');
            } finally {
                loader.style.display = 'none';
            }
        });

        // Event listener for the video download trigger button
        videoDownloadTrigger.addEventListener('click', () => {
            if (currentVideoDownloadUrl) {
                window.open(currentVideoDownloadUrl, '_blank'); // Open in new tab using the API's provided URL
            } else {
                showMessageBox('No video download link available. Please search for a video first.');
            }
        });

        // Event listener for the new "Download Next" button
        downloadNextButton.addEventListener('click', () => {
            location.reload(); // Refresh the page
        });
    </script>
</body>
</html>
