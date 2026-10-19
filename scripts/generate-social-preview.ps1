# Rebuild the social-sharing image using Windows System.Drawing.
Add-Type -AssemblyName System.Drawing
$canvas = New-Object System.Drawing.Bitmap 1200,630
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = 'AntiAliasGridFit'
$g.Clear([System.Drawing.ColorTranslator]::FromHtml('#090b14'))
function Brush($hex) { New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex)) }
function Label($text,$size,$x,$y,$hex,$bold=$false) {
  $style = if ($bold) {[System.Drawing.FontStyle]::Bold} else {[System.Drawing.FontStyle]::Regular}
  $font = New-Object System.Drawing.Font 'Segoe UI',$size,$style,([System.Drawing.GraphicsUnit]::Pixel)
  $brush = Brush $hex
  $g.DrawString($text,$font,$brush,$x,$y)
  $font.Dispose(); $brush.Dispose()
}
$gridPen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#142239')),1
for ($x=0;$x -le 1200;$x+=60) {$g.DrawLine($gridPen,$x,0,$x,630)}
for ($y=0;$y -le 630;$y+=60) {$g.DrawLine($gridPen,0,$y,1200,$y)}
$cyan = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#41e8ff')),3
$pink = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#ff43ad')),3
$g.DrawRectangle($gridPen,30,30,1138,568)
$g.DrawLine($cyan,30,30,200,30); $g.DrawLine($cyan,30,30,30,110)
$g.DrawLine($pink,1000,598,1168,598); $g.DrawLine($pink,1168,518,1168,598)
Label 'PLAYER_01 // GAME DEVELOPER PORTFOLIO' 19 65 65 '#41e8ff'
Label 'NERMIN' 85 69 119 '#ff43ad' $true
Label 'NERMIN' 85 65 117 '#edf3ff' $true
Label 'SHAWKAT' 85 69 211 '#ff43ad' $true
Label 'SHAWKAT' 85 65 209 '#edf3ff' $true
Label 'SENIOR GAME DEVELOPER' 28 70 326 '#41e8ff' $true
Label '10+ YEARS  /  UNITY & UNREAL ENGINE' 23 70 382 '#b3bdd3'
Label 'GAMEPLAY SYSTEMS  /  LIVE OPS  /  MOBILE, PC & VR' 17 70 429 '#b3bdd3'
$yellow=Brush '#f5ed48'; $g.FillRectangle($yellow,70,505,310,44)
Label 'BUILD WORLDS. SHIP GAMES.' 17 83 514 '#090b14' $true
Label 'gitnermin.github.io/Portfolio' 18 770 522 '#899ab9'
$g.DrawRectangle($cyan,875,153,220,260)
$g.DrawLine($pink,910,188,1125,188); $g.DrawLine($pink,1125,188,1125,440)
Label 'NS' 100 882 190 '#41e8ff' $true
Label '// SYSTEMS ONLINE' 16 894 350 '#f5ed48'
$outPath = Join-Path $PSScriptRoot '../assets/img/social-preview.png'
$canvas.Save($outPath,[System.Drawing.Imaging.ImageFormat]::Png)
$yellow.Dispose(); $gridPen.Dispose(); $cyan.Dispose(); $pink.Dispose(); $g.Dispose(); $canvas.Dispose()
