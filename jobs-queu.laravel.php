// 1  jobs and Queue Use 
// mail Report and Image Processing jobs and queue mostaly use fast service 
// best link: https://www.youtube.com/watch?v=FC-tdgIrwws
// Job queues in programming and web development are a way to manage and process tasks asynchronously, which means tasks can be handled in the background without interrupting the flow of the main application. They are especially useful for tasks that are time-consuming or resource-intensive, such as sending emails, processing images, generating reports, or any task that doesn't need to be executed immediately.
             //    Command
//php artisan make:job SendEmailJob

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;

    public function __construct($email)
    {
        $this->email = $email;
    }

    public function handle()
    {
        // Logic for sending email
    }
}
