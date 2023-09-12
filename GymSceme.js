const weekdays = document.querySelectorAll('.weekday');
const info = document.getElementById('info');

const weekdayInfo = {
    monday: `
        <h2>Monday: Chest & Shoulders</h2>
        <ul>
            <li>Warmup 12 min treadmill.</li>
            <li>Shoulder Press, DB 3x12</li>
            <li>Bench press 3x12/5x5</li>
            <li>Front & Rear military press 6 of each x3</li>
            <li>Incline DB press 3x12/3x10</li>
            <li>Dips 3xFailure</li>
            <li>Lateral raises 3x20</li>
            <li>Chest flys 3x15 (optional)</li>
        </ul>
    `,
    tuesday: `
        <h2>Tuesday: Back & Arms</h2>
        <ul>
            <li>Warmup 10 min stairmaster.</li>
            <li>Lateral Pulldowns 3x10</li>
            <li>Tricep Pushdown 3x12</li>
            <li>Seated Cable Row 3x10</li>
            <li>Tricep Pulldowns 3x12</li>
            <li>Wide Rows 3x15</li>
            <li>Skullcrushers 3x15</li>
            <li>Deadlift 3x6</li>
            <li>Preacher curls, Single & Double Handed Superset 3xFailure</li>
            <li>Barbell Curls 3x12</li>
            <li>Hammer Curls 3x15</li>
        </ul>
    `,
    wednesday: `
        <h2>Wednesday: Legs & Abdominal</h2>
        <ul>
            <li>Warmup 8-12 min stairmaster.</li>
            <li>Squats: 3x8</li>
            <li>Leg press 3x18</li>
            <li>Abdominal Crunchers 3xFailure</li>
            <li>Leg Extensions 3x18</li>
            <li>Hamstring Curls 3x16</li>
            <li>Situps/Weighted Situps 3x15</li>
            <li>Romanian Deadlifts 3x12 (Killer)</li>
        </ul>
    `,
    thursday: `
        <h2>Thursday: Chest & Shoulders</h2>
        <ul>
            <li>Warmup 10 min stairmaster.</li>
            <li>Shoulder Press, Smith 3x8</li>
            <li>Flat DB Press 3x12/5x5</li>
            <li>Front & Rear military press 6 of each x3</li>
            <li>Incline Barbell Press 3x12/3x10</li>
            <li>Dips 3xFailure</li>
            <li>Lateral raises 3x20</li>
            <li>Chest flys 3x15 (optional)</li>
        </ul>
    `,
    friday: `
        <h2>Friday: Back & Arms</h2>
        <ul>
            <li>Warmup 12 min stairmaster.</li>
            <li>Lateral Pulldowns 3x10</li>
            <li>Tricep Pushdown 3x12</li>
            <li>Seated Cable Row 3x10</li>
            <li>Tricep Pulldowns 3x12</li>
            <li>Wide Rows 3x15</li>
            <li>Skullcrushers 3x15</li>
            <li>Deadlift 3x6</li>
            <li>Preacher curls, Single & Double Handed Superset 3xFailure</li>
            <li>Barbell Curls 3x12</li>
            <li>Hammer Curls 3x15</li>
        </ul>
    `,
    saturday: `
        <h2>Saturday (Optional): Legs & Abdominal</h2>
        <ul>
            <li>Warmup 8-12 min stairmaster.</li>
            <li>Squats: 3x8</li>
            <li>Leg press 3x18</li>
            <li>Abdominal Crunchers 3xFailure</li>
            <li>Leg Extensions 3x18</li>
            <li>Hamstring Curls 3x16</li>
            <li>Situps/Weighted Situps 3x15</li>
            <li>Romanian Deadlifts 3x12 (Killer)</li>
        </ul>
    `,
    sunday: `Rest`,
};

weekdays.forEach((weekday) => {
    weekday.addEventListener('click', () => {
        const id = weekday.id.toLowerCase();
        info.innerHTML = weekdayInfo[id];
    });
});
