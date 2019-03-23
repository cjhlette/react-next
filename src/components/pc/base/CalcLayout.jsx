import Link from 'next/link';
import '#styles/pc/base/CalcLayout.scss';

const CalcLayout = ({ title, step, isFooter = true, children, onSubmit }) => {
  return (
    <div className="CalcLayout">
      <h2>{title}</h2>
      <main>{children}</main>
      {isFooter && (
        <div className="bottom">
          {step <= 1 ? (
            <span className="btn big disable left">prev</span>
          ) : (
            <Link href={`/calculation/step${step - 1}`}>
              <a className="btn big left">prev</a>
            </Link>
          )}

          {step === 4 ? (
            <span className="btn big right" onClick={onSubmit}>
              제출
            </span>
          ) : (
            <Link href={`/calculation/step${step + 1}`}>
              <a className="btn big right">next</a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CalcLayout;
