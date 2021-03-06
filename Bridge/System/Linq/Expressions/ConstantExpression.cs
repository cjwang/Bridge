using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 9")]
    public sealed class ConstantExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern object Value { get; private set; }

        internal extern ConstantExpression();
    }
}