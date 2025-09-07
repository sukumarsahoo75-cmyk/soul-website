<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOUL Fragrances</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background-color: #000;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        header {
            text-align: center;
            padding: 2rem 0;
            animation: fadeIn 1.5s ease-out;
        }
        
        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 4.5rem;
            letter-spacing: 8px;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }
        
        .logo::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #8a5d3b, #d4af37);
        }
        
        .tagline {
            font-size: 1.2rem;
            opacity: 0.8;
            margin-bottom: 2rem;
        }
        
        .perfume-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.5rem;
            margin-top: 3rem;
        }
        
        .perfume-card {
            background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
            border-radius: 15px;
            padding: 2rem;
            width: 320px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            transition: transform 0.4s, box-shadow 0.4s;
            opacity: 0;
            animation: slideUp 1s forwards;
            animation-delay: 0.5s;
        }
        
        .perfume-card:nth-child(2) {
            animation-delay: 0.8s;
        }
        
        .perfume-card:nth-child(3) {
            animation-delay: 1.1s;
        }
        
        .perfume-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(212, 175, 55, 0.2);
        }
        
        .perfume-name {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #d4af37;
            position: relative;
            display: inline-block;
        }
        
        .perfume-name::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, #8a5d3b, #d4af37);
        }
        
        .perfume-description {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            font-style: italic;
            opacity: 0.9;
        }
        
        .details {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #333;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.8rem;
        }
        
        .detail-label {
            opacity: 0.7;
        }
        
        .detail-value {
            font-weight: 500;
        }
        
        .notes {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .note {
            background: rgba(212, 175, 55, 0.15);
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .footer {
            text-align: center;
            margin-top: 4rem;
            padding: 2rem;
            opacity: 0.7;
            font-size: 0.9rem;
            animation: fadeIn 2s forwards;
            animation-delay: 1.5s;
            opacity: 0;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(50px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .decoration {
            position: absolute;
            opacity: 0.03;
            font-size: 18rem;
            z-index: -1;
            font-family: 'Playfair Display', serif;
        }
        
        .decoration-1 {
            top: 50px;
            left: 10%;
            transform: rotate(-15deg);
        }
        
        .decoration-2 {
            bottom: 100px;
            right: 10%;
            transform: rotate(10deg);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .perfume-container {
                flex-direction: column;
                align-items: center;
            }
            
            .logo {
                font-size: 3.5rem;
            }
            
            .perfume-card {
                width: 100%;
                max-width: 400px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="logo">SOUL</h1>
            <p class="tagline">Elegance in Every Drop</p>
        </header>
        
        <div class="perfume-container">
            <div class="perfume-card">
                <h2 class="perfume-name">Soul No. 1</h2>
                <p class="perfume-description">A fresh, modern fragrance with notes of citrus and amber.</p>
                <p>A fresh, modern fragrance that captures the essence of rain on a thirsty earth. It awakens the senses with its vibrant energy.</p>
                
                <div class="details">
                    <div class="detail-item">
                        <span class="detail-label">Intensity:</span>
                        <span class="detail-value">Medium</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Longevity:</span>
                        <span class="detail-value">8 hours</span>
                    </div>
                    
                    <div class="notes">
                        <span class="note">Citrus</span>
                        <span class="note">Amber</span>
                        <span class="note">Rain</span>
                    </div>
                </div>
            </div>
            
            <div class="perfume-card">
                <h2 class="perfume-name">Soul No. 2</h2>
                <p class="perfume-description">A warm, woody fragrance with hints of vanilla and musk.</p>
                <p>A warm embrace of woody notes that arrives like rain on a solemn face. Deep and contemplative, it tells a story of introspection.</p>
                
                <div class="details">
                    <div class="detail-item">
                        <span class="detail-label">Intensity:</span>
                        <span class="detail-value">Strong</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Longevity:</span>
                        <span class="detail-value">10 hours</span>
                    </div>
                    
                    <div class="notes">
                        <span class="note">Woody</span>
                        <span class="note">Vanilla</span>
                        <span class="note">Musk</span>
                    </div>
                </div>
            </div>
            
            <div class="perfume-card">
                <h2 class="perfume-name">Soul No. 3</h2>
                <p class="perfume-description">A floral, elegant fragrance for a truly timeless feel.</p>
                <p>An elegant floral composition that illustrates the winds of change. Timeless and sophisticated, it's the perfect companion for special moments.</p>
                
                <div class="details">
                    <div class="detail-item">
                        <span class="detail-label">Intensity:</span>
                        <span class="detail-value">Light</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Longevity:</span>
                        <span class="detail-value">6 hours</span>
                    </div>
                    
                    <div class="notes">
                        <span class="note">Floral</span>
                        <span class="note">Musk</span>
                        <span class="note">Sandalfwood</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2023 SOUL Fragrances. All rights reserved.</p>
        </div>
        
        <div class="decoration decoration-1">SOUL</div>
        <div class="decoration decoration-2">SOUL</div>
    </div>

    <script>
        // Additional animation for page load
        document.addEventListener('DOMContentLoaded', function() {
            document.body.classList.add('loaded');
        });
    </script>
</body>
</html>
