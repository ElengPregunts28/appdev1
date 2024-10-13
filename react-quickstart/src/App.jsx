let content;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

export default function ConditionalRendering() {
  return (
    <div>
      {content}
    </div>
  );
}